import { stringify } from 'viem';
import { publicClient } from '../viem';

// no cache/no edge
// export const revalidate = 0

// cache/edge
export const revalidate = 'force-cache'
export const runtime = 'edge'

export default async function Page() {
  const transaction = await publicClient.getTransaction({
    hash: '0x9d431acc8a2ab84b3450e97b8c4ec266fa5538e81038cd8d84081b739b09b973'
  })

  return (
    <div>
      <h1>Transaction</h1>
      <pre>{stringify(transaction, null, 2)}</pre>
    </div>
  );
}