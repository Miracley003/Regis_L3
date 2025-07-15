
import Faucet from '../components/Faucet';
import SendToken from '../components/SendToken';
import Balance from '../components/Balance';

export default function Home() {
  return (
    <main style={{ padding: '2rem', backgroundColor: '#000', color: '#fff' }}>
      <h1 style={{ fontSize: '2rem', textAlign: 'center' }}>🚀 Welcome to Regis DApp</h1>
      <Balance />
      <SendToken />
      <Faucet />
    </main>
  );
}
