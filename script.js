/* =====================================
   MICROSCOPE PART INFORMATION
===================================== */

const microscopeParts = {

    eyepiece: {
        name: "Eyepiece",
        icon: "🔭",

        description:
            "The eyepiece is the part at the top of the microscope that the user looks through.",

        function:
            "It magnifies the image produced by the objective lens so the specimen can be viewed more clearly.",

        viewBox: "82 5 48 75"
    },


    bodyTube: {
        name: "Body Tube",
        icon: "🔬",

        description:
            "The body tube connects the eyepiece to the objective lenses.",

        function:
            "It keeps the eyepiece and objective lenses aligned so that light and the magnified image can pass through the optical system.",

        viewBox: "82 45 48 75"
    },


    arm: {
        name: "Arm",
        icon: "🦾",

        description:
            "The arm is the large curved support that forms the main frame of the microscope.",

        function:
            "It supports the upper components of the microscope and provides a safe place to hold the microscope when carrying it."
            ,

        viewBox: "15 45 100 180"
    },


    nosepiece: {
        name: "Revolving Nosepiece",
        icon: "⚙️",

        description:
            "The revolving nosepiece is located below the body tube and holds the objective lenses.",

        function:
            "It rotates so the user can switch between different objective lenses and magnification levels.",

        viewBox: "85 90 65 60"
    },


    objectives: {
        name: "Objective Lenses",
        icon: "🔬",

        description:
            "The objective lenses are the lenses located closest to the specimen.",

        function:
            "They provide the main magnification of the specimen. Different objectives provide different magnification levels.",

        viewBox: "85 100 45 55"
    },


    stage: {
        name: "Stage",
        icon: "⬛",

        description:
            "The stage is the flat platform where the microscope slide is placed.",

        function:
            "It supports and positions the specimen slide so that the specimen can be observed through the objective lens.",

        viewBox: "40 130 110 50"
    },


    clips: {
        name: "Stage Clips",
        icon: "📎",

        description:
            "Stage clips are the small pieces located on top of the stage.",

        function:
            "They hold the microscope slide securely in place while the specimen is being viewed.",

        viewBox: "82 132 58 38"
    },


    condenser: {
        name: "Condenser",
        icon: "🔎",

        description:
            "The condenser is located underneath the stage.",

        function:
            "It concentrates and directs light toward the specimen to provide proper illumination.",

        viewBox: "65 150 55 35"
    },


    diaphragm: {
        name: "Diaphragm",
        icon: "⭕",

        description:
            "The diaphragm is located beneath the stage near the condenser.",

        function:
            "It controls the amount of light passing through the specimen.",

        viewBox: "70 158 45 32"
    },


    coarse: {
        name: "Coarse Adjustment Knob",
        icon: "⚙️",

        description:
            "The coarse adjustment knob is the larger focusing control.",

        function:
            "It moves the focusing mechanism by a larger amount to bring the specimen into general focus.",

        viewBox: "65 160 40 40"
    },


    fine: {
        name: "Fine Adjustment Knob",
        icon: "⚙️",

        description:
            "The fine adjustment knob is the smaller focusing control.",

        function:
            "It makes small adjustments to the focus so that the specimen image becomes sharper and clearer.",

        viewBox: "105 160 40 35"
    },


    stageControls: {
        name: "Mechanical Stage Controls",
        icon: "⚙️",

        description:
            "The mechanical stage controls are used to move the slide and stage position.",

        function:
            "They allow the user to move the specimen precisely from side to side and forward or backward.",

        viewBox: "103 150 40 50"
    },


    light: {
        name: "Light Source",
        icon: "💡",

        description:
            "The light source is located underneath the stage.",

        function:
            "It provides illumination that passes through the specimen so that the specimen can be seen.",

        viewBox: "65 180 55 40"
    },


    base: {
        name: "Base",
        icon: "⬛",

        description:
            "The base is the bottom part of the microscope.",

        function:
            "It supports the entire microscope and provides stability while the microscope is being used.",

        viewBox: "5 195 150 47"
    }

};


/* =====================================
   OPEN EQUIPMENT
===================================== */

function openEquipment(equipment) {

    const microscopeArea =
        document.getElementById("microscopeArea");

    const equipmentInfo =
        document.getElementById("equipmentInfo");


    equipmentInfo.classList.add("hidden");


    if (equipment === "microscope") {

        microscopeArea.classList.remove("hidden");

        resetMicroscope();

        microscopeArea.scrollIntoView({
            behavior: "smooth"
        });

        return;
    }


    microscopeArea.classList.add("hidden");


    const equipmentData = {

        centrifuge: {
            title: "Centrifuge",

            description:
                "A centrifuge is a laboratory machine that separates substances in a sample by spinning them at high speed.",

            function:
                "It separates components of a mixture based on differences in density."
        },


        balance: {
            title: "Digital Balance",

            description:
                "A digital balance is an electronic instrument used to measure the mass of laboratory materials.",

            function:
                "It measures the mass of objects or substances."
        },


        beaker: {
            title: "Beaker",

            description:
                "A beaker is a common laboratory container used for holding, mixing, and heating substances.",

            function:
                "It is mainly used to contain and mix liquids."
        },


        thermometer: {
            title: "Thermometer",

            description:
                "A thermometer is an instrument used to measure temperature.",

            function:
                "It measures the temperature of a substance or environment."
        },


        burner: {
            title: "Bunsen Burner",

            description:
                "A Bunsen burner is a laboratory device that produces a flame for heating.",

            function:
                "It provides a controlled heat source for appropriate laboratory procedures."
        }

    };


    const data = equipmentData[equipment];

    if (!data) return;


    document.getElementById("equipmentTitle")
        .textContent = data.title;

    document.getElementById("equipmentDescription")
        .textContent = data.description;

    document.getElementById("equipmentFunction")
        .textContent = data.function;


    equipmentInfo.classList.remove("hidden");

    equipmentInfo.scrollIntoView({
        behavior: "smooth"
    });
}


/* =====================================
   HOVER INFORMATION
===================================== */

function hoverPart(partName) {

    const part = microscopeParts[partName];

    if (!part) return;


    document.getElementById("infoIcon")
        .textContent = part.icon;

    document.getElementById("partName")
        .textContent = part.name;

    document.getElementById("partDescription")
        .textContent = part.description;

    document.getElementById("partFunction")
        .textContent = part.function;
}


/* =====================================
   CLICK / ZOOM PART
===================================== */

function selectPart(partName) {

    const part = microscopeParts[partName];

    if (!part) return;


    /*
       Remove selected state
       from every hotspot.
    */

    document
        .querySelectorAll(".microscope-part")
        .forEach(element => {

            element.classList.remove("selected");

        });


    /*
       Select every hotspot belonging
       to the same part.
    */

    document
        .querySelectorAll(
            `[data-part="${partName}"]`
        )
        .forEach(element => {

            element.classList.add("selected");

        });


    /*
       Update information panel.
    */

    document.getElementById("infoIcon")
        .textContent = part.icon;

    document.getElementById("partName")
        .textContent = part.name;

    document.getElementById("partDescription")
        .textContent = part.description;

    document.getElementById("partFunction")
        .textContent = part.function;


    /*
       Zoom into selected part.
    */

    const microscopeSVG =
        document.getElementById("microscopeSVG");


    microscopeSVG.setAttribute(
        "viewBox",
        part.viewBox
    );


    /*
       Smooth scroll to information
       on smaller screens.
    */

    if (window.innerWidth <= 900) {

        document
            .querySelector(".info-panel")
            .scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });

    }
}


/* =====================================
   RESET MICROSCOPE
===================================== */

function resetMicroscope() {

    const microscopeSVG =
        document.getElementById("microscopeSVG");


    microscopeSVG.setAttribute(
        "viewBox",
        "0 0 159.6 241.87"
    );


    /*
       Remove all highlights.
    */

    document
        .querySelectorAll(".microscope-part")
        .forEach(part => {

            part.classList.remove("selected");

        });


    /*
       Reset information panel.
    */

    document.getElementById("infoIcon")
        .textContent = "🔬";

    document.getElementById("partName")
        .textContent = "Select a Part";

    document.getElementById("partDescription")
        .textContent =
            "Hover over a microscope part to highlight it. Click it to zoom in and learn more.";

    document.getElementById("partFunction")
        .textContent =
            "Choose a microscope part to see its function.";
}


/* =====================================
   KEYBOARD SUPPORT
===================================== */

document
    .querySelectorAll(".microscope-part")
    .forEach(part => {

        const partName =
            part.dataset.part;


        part.addEventListener(
            "mouseenter",
            () => hoverPart(partName)
        );


        part.addEventListener(
            "focus",
            () => hoverPart(partName)
        );


        part.addEventListener(
            "click",
            () => selectPart(partName)
        );


        part.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    selectPart(partName);
                }

            }
        );

    });


/* =====================================
   CLOSE EQUIPMENT
===================================== */

function closeEquipment() {

    document
        .getElementById("equipmentInfo")
        .classList.add("hidden");

    document
        .getElementById("microscopeArea")
        .classList.add("hidden");
}
