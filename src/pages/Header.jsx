import React from "react";

function Header() {
return (
    <>
        <div>
            <h1 className=" text-center text-4xl text-orange-500 font-bold mt-7 ">introdution a react.js</h1>
            <p className=" mb-5 text-center text-gray-700 font-semibold">React.js est une bibliothèque JavaScript pour construire des interfaces utilisateur interactives.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-6 gap-5">
                <div className="bg-red-200 rounded-lg shadow p-6 flex flex-col items-center">
                    <h2 className="text-xl font-bold text-orange-500 mb-2">Composants</h2>
                    <p className="text-gray-600 text-center">Les composants sont les blocs de construction de React. Ils permettent de réutiliser du code.</p>
                </div>
                <div className="bg-green-200 rounded-lg shadow p-6 flex flex-col items-center">
                    <h2 className="text-xl font-bold text-orange-500 mb-2">JSX</h2>
                    <p className="text-gray-600 text-center">JSX est une extension de syntaxe qui permet d’écrire du HTML dans du JavaScript.</p>
                </div>
                <div className="bg-blue-200 rounded-lg shadow p-6 flex flex-col items-center">
                    <h2 className="text-xl font-bold text-orange-500 mb-2">Props & State</h2>
                    <p className="text-gray-600 text-center">Les props et le state permettent de gérer les données et l’interactivité dans une application React.</p>
                </div>
            </div>
        </div>
    </>
);
}

export default Header;
