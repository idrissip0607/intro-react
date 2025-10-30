import  { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { TableProduits } from "../../controllers/db";
import { Link } from "react-router-dom";

function Page() {
  /*  const [nom , setNom] = useState("Idriss")*/
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    setProduits(TableProduits);

  }, []);

  /* useEffect(()=> {
  console.log("salut")
  }, [nom]) */
  return (
    <div>
      <Navbar />
      <h1 className="text-center font-bold text-3xl my-5">Liste des Produits</h1>
      {/* <p>nom : {nom}</p> 
      <button onClick={()=> setNom("Frederic")} className='btn btn-neutral'>edit Nom</button>*/}
      <div>
        {produits && produits.length > 0 ? (
          <div id="tableau" className="grid grid-cols-1 px-4 md:px-8 gap-5 md:grid-cols-4">
          {produits.map((item, index)=> 
          <div className="card shadow-lg p-3" key={index}>
            <img src="/img/smartphone.jpg" alt="nophoto" />
            <div className=" card-body">
            <h2>{item.nom}</h2>
            <p>prix : {item.prix} Fcfa</p>
            <Link to={`/detail/${item.id}`} className="btn btn-success">Detail</Link>
            </div>

          </div>
          )}
          </div>
        ) : (
          <p>aucun produit pour le moment</p>
        )}
      </div>
    </div>
  );
}

export default Page;
