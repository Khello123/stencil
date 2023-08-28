import { Component, Host, State, h,Element } from '@stencil/core';
import { fetchSingleStockPrice } from '../../utils/utils';


@Component({
  tag: 'cm-stock-price',
  styleUrl: 'cm-stock-price.css',
  shadow: true,
})
export class CmStockPrice {
  @State() fetchedPrice:string;
  @Element() el:HTMLElement;

  async onFetchStockPrice(event:Event){
    try{
      event.preventDefault();
    const input:HTMLInputElement=this.el.shadowRoot.querySelector("#stock-symbol");
    if(input){
      this.fetchedPrice=await fetchSingleStockPrice(input.value);
    }
    }catch(error){
      console.log(error)
    }

  }

  render() {
    return (
      <Host>
        <form onSubmit={this.onFetchStockPrice.bind(this)}>
        <input id='stock-symbol'/>
        <button type='submit'>fetch</button>
        </form>
        <div>
          <p>Price:${this.fetchedPrice}</p>
        </div>
      </Host>
    );
  }

}
