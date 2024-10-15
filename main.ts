import { Led } from './LedClass.ts';

const jsonFile = './ledData.json';
const ledData = JSON.parse(await Deno.readTextFile(jsonFile));

const led = new Led(ledData.state, ledData.brightness, ledData.color);

Deno.serve(async (req) => {
  try{
    const url = new URL(req.url);
    const urlPathName : string = url.pathname;

    if(req.method === 'GET')
    {
      if (urlPathName === '/led') {
        return new Response(JSON.stringify(led));
      }
      else if (urlPathName === '/led/state') {
        return new Response(JSON.stringify(led.state));
      }
      else if (urlPathName === '/led/brightness') {
        return new Response(JSON.stringify(led.brightness));
      }
      else if (urlPathName === '/led/color') {
        return new Response(JSON.stringify(led.color));
      }
    }

    else if(req.method === 'PUT')
    {
      if (urlPathName === '/led') {
        const body = await req.json();
        led.updateState(body.state);
        led.updateBrightness(body.brightness);
        led.updateColor(body.color);
        return new Response(JSON.stringify(led));
      }
      else if (urlPathName === '/led/state') {
        const body = await req.json();
        led.updateState(body.state);
        return new Response(JSON.stringify(led.state));
      }
      else if (urlPathName === '/led/brightness') {
        const body = await req.json();
        led.updateBrightness(body.brightness);
        return new Response(JSON.stringify(led.brightness));
      }
      else if (urlPathName === '/led/color') {
        const body = await req.json();
        led.updateColor(body.color);
        return new Response(JSON.stringify(led.color));
      }
    }

    return new Response('Not Found', { status: 404 });
  }
  catch(err){
    console.error(err);
    return new Response('Internal Server Error', { status: 500 });
  }
  
});