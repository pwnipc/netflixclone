export default function MovieCard( { movie: { imdbID, Year, Poster, Type, Title  } } ) {
    
    return (
        <div className="movie" key={imdbID}>
            <div>
                <p>{Year}</p>
            </div>

            <div>
                <img src={Poster !== "N/A" ? Poster : "https://placehold.co/400"} alt={Title} />
            </div>

            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>

        </div>
    )
}






// export default function MovieCard({ movie: { imdbID, Year, Poster, Type, Title  } }){
//     return (
//       <div className="movie" key={imdbID}>
//         <div>
//           <p>{Year}</p>
//         </div>
  
//         <div>
//           <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
//         </div>
  
//         <div>
//           <span>{Type}</span>
//           <h3>{Title}</h3>
//         </div>
//       </div>
//     );
//   }
  
