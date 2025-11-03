import Card from "@/components/Card";


const cards = [
  {
    title: "Dr. Simon Clark",
    short_description: "Senior Research Scientist",
    description: (
      <>
        Simon develops BattMo and BattINFO. He focuses on translating knowledge
        from the battery domain into machine-actionable code and creating good
        interfaces with battery experts. He holds the degree of Dr. rer. nat. in
        Computational Electrochemistry from{" Ulm University"}
        {/* <a
          href="https://www.uni-ulm.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:text-primary/80"
        >
          Ulm University
        </a>
        . */}
      </>
    ),
    image: "https://raw.githubusercontent.com/BattMoTeam/visual-identity/6bf848f3a4db09dc942bb30dae8396861da19a15/portraits/simon.jpg",
  },
  {
    title: "Dr. Xavier Raynaud",
    short_description: "Senior Research Scientist",
    description: (
      <>
        Xavier develops BattMo and MRST. He focuses on implementing efficient ways to setup and 
        solve systems of differential equations. He holds a PhD in applied mathematics from NTNU 
        and an engineering degree from Ecole Polytechnique (Palaiseau, France).
      </>
    ),
    image: "https://raw.githubusercontent.com/BattMoTeam/visual-identity/6bf848f3a4db09dc942bb30dae8396861da19a15/portraits/xavier.png",
  },
  {
    title: "Dr. Franscesca Watson",
    short_description: "Research Scientist",
    description: (
      <>
        Francesca develops BattMo and MRST. Her research focuses on CO2 storage simulation and she manages 
        the bi-annual MRST software releases. 
        She has a PhD from Durham University, UK, specialising in reservoir simulation for CO2 storage.
      </>
    ),
    image: "https://raw.githubusercontent.com/BattMoTeam/visual-identity/6bf848f3a4db09dc942bb30dae8396861da19a15/portraits/francesca.webp",
  },
  {
    title: "Dr. August Johansson",
    short_description: "Research Scientist",
    description: (
      <>
        August develops BattMo and MRST. His training has been in finite element methods, in particular 
        adaptive methods where the domain does not have to fit the mesh. He has a PhD from Umeå University.
      </>
    ),
    image: "https://raw.githubusercontent.com/BattMoTeam/visual-identity/6bf848f3a4db09dc942bb30dae8396861da19a15/portraits/august.webp",
  },
  {
    title: "Dr. Eibar Flores",
    short_description: "Research Scientist",
    description: (
      <>
        Eibar develops BattMo and BattINFO. He focuses on integrating digital tools into experimental 
        workflows and applying them for design optimizations. He has a PhD from ETH Zurich.
      </>
    ),
    image: "https://raw.githubusercontent.com/BattMoTeam/visual-identity/6bf848f3a4db09dc942bb30dae8396861da19a15/portraits/eibar.webp",
  },
  {
    title: "Dr. Halvor Møll Nilsen",
    short_description: "Senior Research Scientist",
    description: (
      <>
        Halvor develops BattMo, MRST, and OPM Flow. His expertise centers on numerically simulating 
        flow in porous media, particularly within porous rock and electrochemical systems. He has a 
        PhD from University of Bergen.
      </>
    ),
    image: "https://raw.githubusercontent.com/BattMoTeam/visual-identity/6bf848f3a4db09dc942bb30dae8396861da19a15/portraits/halvor.png",
  },
  {
    title: "Dr. Olav Møyner",
    short_description: "Senior Research Scientist",
    description: (
      <>
        Olav develops MRST, Jutul and BattMo. His expertise includes high-performance automatic 
        differentiation, discretizations and nonlinear solvers for multi-phase and multi-component 
        flows. He has a PhD from the Norwegian University of Science and Technology (NTNU).
      </>
    ),
    image: "https://raw.githubusercontent.com/BattMoTeam/visual-identity/6bf848f3a4db09dc942bb30dae8396861da19a15/portraits/olav.webp",
  },
  {
    title: "Lorena Hendrix",
    short_description: "Master of Science",
    description: (
      <>
        Lorena develops BattMo and BattMoApp. She focuses making BattMo accessible and user-friendly. 
        She obtained her Masters degree in Applied Physics at Delft University of Technology.
      </>
    ),
    image: "https://raw.githubusercontent.com/BattMoTeam/visual-identity/6bf848f3a4db09dc942bb30dae8396861da19a15/portraits/lorena.webp",
  },
  {
    title: "Dr. Sridevi Krishnamurthi",
    short_description: "Research Scientist",
    description: (
      <>
        Sridevi krishnamurthi works on BattMo and ontologies, She focuses on making electrochemical 
        modelling accessible, She holds a PhD in Computational Material sciences from University of Twente, NL.
      </>
    ),
    image: "https://raw.githubusercontent.com/BattMoTeam/visual-identity/6bf848f3a4db09dc942bb30dae8396861da19a15/portraits/sridevi.png",
  },
];




export default function OurTeamPage() {
  return (
    <div className="flex bg-background items-center">
      {/* --- Row 3: BattMo Team Cards --- */}
            <div className="w-full flex flex-col items-center pb-30">
              <h1 className="text-5xl font-bold text-primary mt-10 text-center">
                BattMo Team
              </h1>
              <span className="border-b p-10 max-w-5xl mb-10 text-center">

                BattMo is developed and maintained by a dedicated team of scientists at the Norwegian research institute SINTEF, the largest independent research institute in Scandinavia. Through research projects with the Norwegian Research Council and European Union, as well as direct industry projects, SINTEF aims to live up to its motto and develop Technology for a Better Society!
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
                {cards.map((card) => (
                  <Card
                    key={card.title}
                    title={card.title}
                    short_description={card.short_description}
                    description={card.description}
                    imgSrc={card.image}
                  />
                ))}
              </div>
            </div>
            </div>
  );
}