
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsList = document.getElementById('results');





// function filterResults(searchTerm) {
//     return product.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
// }

// // Función para mostrar los resultados
// function showResults(results) {
//     resultsList.innerHTML = '';
//     showResults.forEach(result => {
//         const li = document.createElement('li');
//         li.textContent = result;
//         resultsList.appendChild(li);
//     });
// }

// // Evento al hacer clic en el botón de búsqueda
// searchButton.addEventListener('click', () => {
//     const searchTerm = searchInput.value.trim();
//     const filteredResults = filterResults(searchTerm);
//     showResults(filteredResults);
// });

// // Evento al escribir en el campo de búsqueda
// searchInput.addEventListener('input', () => {
//     const searchTerm = searchInput.value.trim();
//     const filteredResults = filterResults(searchTerm);
//     showResults(filteredResults);
// });

// // Importa las librerías necesarias
// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [results, setResults] = useState([]);

//     // Función para realizar la búsqueda
//     const searchProducts = async () => {
//         try {
//             const response = await axios.get(`https://api.mercadolibre.com/categories/MLA1055`);
//             setResults(response.data.results);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     return (
//         <div className="App">
//             <h1>Buscador de Mercado Libre</h1>
//             <input
//                 type="text"
//                 placeholder="Buscar productos..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <button onClick={searchProducts}>Buscar</button>

//             <ul>
//                 {results.map((item) => (
//                     <li key={item.id}>
//                         <img src={item.thumbnail} alt={item.title} />
//                         <p>{item.title}</p>
//                         <p>Precio: ${item.price}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default App;
