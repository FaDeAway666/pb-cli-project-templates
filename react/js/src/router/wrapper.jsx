import { Suspense } from 'react'

export default function wrapper(Page) {
  return (
    <Suspense fallback={<><div>nothing</div></>}>
      {<Page />}
    </Suspense>
  );
}