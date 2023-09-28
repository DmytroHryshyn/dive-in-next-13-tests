import { NextRequest, NextResponse } from 'next/server'

const getBucket = ()  =>{
  let n = cryptoRandom() * 100
  
  console.log(n)
  return n > 90 ? 'future' : '';
}

function cryptoRandom() {
  return crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1)
}


export const config = {
  matcher: ['/test1'],
}

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  let bucket = req.cookies.get('bucket')?.value
  let hasBucket = !!bucket

  if (!bucket) {
    bucket = getBucket()
    hasBucket = false
  }

  // Create a rewrite to the page matching the bucket
  const url = req.nextUrl.clone()
  
  // redirects to
  // test1 or future/test1
  url.pathname = `${bucket}${pathname}/`;
  console.log(url.pathname, bucket, '?')
  const res = NextResponse.rewrite(url)

  // Add the bucket to the response cookies if it's not there
  // or if its value was invalid
  if (!hasBucket) {
    res.cookies.set('bucket', bucket)
  }

  return res
}