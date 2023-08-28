import { Component, Method, Prop, State, h,  } from '@stencil/core';

@Component({
  tag: 'cm-drawer',
  styleUrl: 'cm-drawer.css',
  shadow: true,
})
export class CmDrawer {
  @State() showContactInfo=false;
  @Prop({ reflect: true }) drawertitle: string;
  @Prop({ reflect: true, mutable: true }) opened: boolean;

  async onCloseDrawer() {
    this.opened = false;
  }

  onContentChange(content:string){
this.showContactInfo=content==="contact";
  }

  @Method()
  async open(){
    this.opened=true;
  }

  

  render() {
    
    let mainContent=<slot/>;
    if(this.showContactInfo){

      mainContent=(
        
        <div id='contact-information'>
          <h2>Contact Information</h2>
          <p>You can reach us via phone oe email</p>
           <ul>
            <li>Phone:099090</li>
            <li>emial:<a href=''>khello@gmail.com</a></li>
           </ul>
        </div>
      );
    }
    
    return [
    <div class="backdrop" onClick={this.onCloseDrawer.bind(this)}></div>,
      <aside class={'aside'}>
        <header class={'header'}>
          <h1>{this.drawertitle || 'drawer title'}</h1>
          <button onClick={this.onCloseDrawer.bind(this)}>X</button>
        </header>
        <section id="tabs">
          <button 
          class={!this.showContactInfo?"active":""}
           onClick={this.onContentChange.bind(this,"nav")}>Navigation</button>
          <button 
          class={this.showContactInfo?"active":""}
          onClick={this.onContentChange.bind(this,"contact")}>Contact</button>
        </section>
        <main>
          {mainContent}
        </main>
      </aside>
    ];
  }
}

//   let content=null;
//   if(this.opened){
//  content=(

//    <Host>
//     <aside class={'aside'}>
//       <header class={"header"}>
//         <h1>{this.drawertitle || 'drawer title'}</h1>
//       </header>
//       <section>
//         <slot></slot>
//       </section>
//     </aside>
//     </Host>
//  );
//   }
// return content;