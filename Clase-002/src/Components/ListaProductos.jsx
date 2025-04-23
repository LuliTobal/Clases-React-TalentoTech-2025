function ListaProductos(productos){

    return(
        <div style={{display:"flex", gap:"20px", flexWrap:"wrap"}}>
            {
                productos.producto.map((producti)=>(
                    <div key={producti.id} style={{padding:"10px"}}>
                        <img src={producti.imagen}
                        alt={producti.nombre}
                        style={{width:"100%", height:"auto", borderRadius:"5px"}} />
                        <h1>{producti.nombre}</h1>
                        <h3>{producti.precio}</h3>
                    </div>
                )
                )
            }
        </div>
    )

}

export default ListaProductos;