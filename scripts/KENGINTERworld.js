//A planet
const KENGINTERworld = extend(
	Planet, "KENGINTERworld", Planets.sun, 5, 0.5 {
	radius: 20,
	generator: new SerpuloPlanetGenerator(),
	bloom: true,
	atmosphereColor: Color.valueOf("0050FF50"),
    atmosphereRadIn: 0.05,
    atmosphereRadOut: 0.3,
	localizedName: "[#84B9E4]KENGINTERworld",
	}
);