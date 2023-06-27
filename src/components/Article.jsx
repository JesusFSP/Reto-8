const Article = () => {
    return ( 
        <section className="section" id="projects">
            <img src="https://i.postimg.cc/dQgjRjtw/flyer.jpg" alt="Fondo de portada" className="img section--background"/>
            <div className="container g-layout g-layout--center md:g-layout--1-1 gap-md">
                <div className="article" >
                    <div className="article__body">
                        <h1 className="article__title">¿Por qué elegirnos?</h1>
                        <p className="article__text">
                        Veterinarias Patitas es sinónimo de profesionalismo y pasión por la medicina veterinaria, son 24 años de salvaguardar el bienestar de las mascotas del Perú, 24 años en los cuales hemos sido precursores en incluir tecnología médica de punta haciendo hincapié en la capacitación constante de nuestro staff, tanto nacional como internacionalmente, cada día es un reto para mejorar la sociedad, para salvar una vida pero sobre todo cambiar nuestro país.
                        </p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Article;