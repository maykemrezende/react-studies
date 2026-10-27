import { Panel } from './components/Panel/Panel'
import { UserCard } from './components/UserCard'

const languages = [
  { id: 1, name: 'C#' },
  { id: 2, name: 'Go' },
  { id: 3, name: 'TypeScript' },
];

const products = [
  { id: 1, name: 'TV' },
  { id: 2, name: 'laptop' },
  { id: 3, name: 'PC' },
  { id: 4, name: 'PS5' }
];

function App() {
  return (
    <main>
      <h1>props-lab</h1>
      <Panel title="Perfil"
            actions={<button onClick={() => alert('Editar')}>Editar</button>}>
        
        <UserCard name="Mayke" role="Backend Engineer" isOnline />
      </Panel>

      <Panel title={<strong>Linguagens ({languages.length})</strong>}>
        <ul>
          {languages.map(lang => (
            <li key={lang.id}>{lang.name}</li>
          ))}
        </ul>
      </Panel>

      <Panel title={<strong>Produtos ({products.length})</strong> }
      >
        <ul>
          {products.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>


      </Panel>
    </main>
  )
}

export default App
