
const Hero = () => {
    return (
        <article className="hero" id="skills">
            <img src="https://i.postimg.cc/MTNd2r39/fondo-vet.jpg" alt="Fondo de portada" className="img img--background" />
            <div className="container g-layout g-layout--center md:g-layout--1-1 gap-md">
                <div className="card" style={{ position: 'relative' }}>
                    <div className="card__body">
                        <h1 className="card__title">Hospital Veterinario Patitas</h1>
                        <h2 className="card__subtitle">Quiénes somos</h2>
                        <p className="card__text">Clínicas Veterinarias Patitas nacen a través de una tradición familiar que se canaliza en una enorme vocación profesional por la medicina veterinaria. </p>
                        <div className="d-flex gap-2xs">
                            <button className="button button--outline-primary">Reservar Cita</button>
                            <button className="button button--primary">contactenos</button>
                        </div>
                    </div>
                </div>
                <div className="hero__images">
                    <img src="https://i.postimg.cc/mrV4xr62/veterinaria.png" alt="Imagen de portada" width={256} height={256} className="img img--hero" />
                    <div className="hero__technologies">
                        <img src="https://www.svgrepo.com/show/405227/dog.svg" alt="CSS" width={64} height={64} className="hero__technology" />
                        <img src="https://www.svgrepo.com/show/408532/dog-food.svg" alt="HTML" width={64} height={64} className="hero__technology" />
                        <img src="https://www.svgrepo.com/show/509929/fish.svg" alt="JavaScript" width={64} height={64} className="hero__technology" />
                        <img src="https://www.svgrepo.com/show/404935/cat.svg" alt="React" width={64} height={64} className="hero__technology" />
                    </div>
                </div>
            </div>
        </article>
    );
}

export default Hero;