import "./setup.ts"
import { handler } from "../handlers/getDexVolume";

(async () => {
    const r = await handler({
        pathParameters: {
            dex: "uniswap"
        }
    } as unknown as AWSLambda.APIGatewayEvent)
    const d = JSON.parse(r.body)
    console.log(d.volumeHistory[0])
    //console.log(JSON.stringify(d, null, 2))
})()