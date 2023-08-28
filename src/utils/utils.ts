export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
export async function fetchSingleStockPrice(stockName:string) :Promise<string>{
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockName}&apikey=WN8JLOEJ888L8F47`);
      const data = await res.json();
      resolve(data['Global Quote']['05. price'])
    } catch (error) {
      reject(error);
    }
  });
}
