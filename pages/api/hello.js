export default async function handler(_, res) {

    const m = await import('libphonenumber-js');
    console.log(m, m.isValidPhoneNumber, 'module')

    res.end();
}