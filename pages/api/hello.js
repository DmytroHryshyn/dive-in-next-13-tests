export default async function handler(_, res) {
    const m = await import('libphonenumber-js');
   
    console.log(m, m.isValidPhoneNumber, m.default.isValidPhoneNumber, 'module')
}

// export const runtime = 'edge';