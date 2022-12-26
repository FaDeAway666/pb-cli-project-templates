import { Suspense } from 'react'

export default function wrapper(Page) {
  return (
    // 暂不添加fallback组件
    <Suspense>
      {<Page />}
    </Suspense>
  );
}