const Client = require('rucaptcha-client');
const { VK } = require('vk-io');

const log = console.log;

const vk = new VK({
    token: 'VK_TOKEN'
});

const client = new Client('RUCAPTCHA_KEY') // Сюда Ключ от рукапчи

vk.callbackService.onCaptcha(async (ctx, retry) => {
    const result = await client.solve(ctx.src);

    retry(result);

    log(`Баланс на рукапче: ${await client.getBalance()}`)
})