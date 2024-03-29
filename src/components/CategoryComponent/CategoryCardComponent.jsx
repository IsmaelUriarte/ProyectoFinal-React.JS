import CategoryComponent from "./CategoryComponent"

const CategoryCardComponent = ({categorias}) => {
    return (
        <div className="productos mx-5 mt-6 mb-20 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
        {
            categorias.map (
                (elemento) => 
                <CategoryComponent key={elemento.id} id={elemento.nombre} nombre={elemento.nombre} imagen={elemento.imagen} />
            )}
        </div>
      )
}

export default CategoryCardComponent