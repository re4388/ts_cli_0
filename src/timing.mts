import got from 'got';
import {program} from "commander";
import {loadJsonFile} from 'load-json-file';
import {colorizeJsonLog} from "./util/colorizeJsonLog.mts";




/**
 * you can call this program directly, like:
 * /Users/re4388/Library/Caches/fnm_multishells/46884_1707223495071/bin/node /Users/re4388/project/personal/nodets/ts_cli_0/node_modules/ts-node/dist/bin.js /Users/re4388/project/personal/nodets/ts_cli_0/src/timing.mts --url https://news.ycombinator.com/news
 *
 * or you can use qq to invoke this
 */



program
    .option('-u, --url <char>');

program.parse();

const options = program.opts();
run(options.url)


async function run(url: string) {
    const {timings, body} = await got(url, {
        timeout: {
            lookup: 10000,
            connect: 10000,
            secureConnect: 10000,
            socket: 10000,
            send: 10000,
            response: 10000
        }
    })

    const timingInfo = await loadJsonFile('/Users/re4388/project/personal/nodets/ts_cli_0/data/timing.json')

    // TODO: these colors disappear when they pas to bun zx and output
    // one way to fix this is when I can use got client in bun
    // or I just directly invoke TS file
    colorizeJsonLog(timingInfo, '說明')
    colorizeJsonLog(timings, 'Stat')
}
