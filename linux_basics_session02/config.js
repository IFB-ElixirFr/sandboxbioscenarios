// Steps
import Step0 from "./steps/step00.md";
import Step1 from "./steps/step01.md";
import Step2 from "./steps/step02.md";
import Step3 from "./steps/step03.md";
import Step4 from "./steps/step04.md";
import Step5 from "./steps/step05.md";
import Step6 from "./steps/step06.md";
import Step7 from "./steps/step07.md";
import Step8 from "./steps/step08.md";

export const config = {
    id: "linux_basics_session02",
    pwd: "linux_basics_session02",
    listed: true,
    name: "Unix file system",
    subtitle: `by <a href="https://www.france-bioinformatique.fr/en/home/" target="_blank">French Institute of Bioinformatics</a>`,
    description: "Unix Module 2",
    tags: ["unix", "shell", "terminal"],
    tools: ["ls", "date"],
    difficulty: ["Unix 2", "Unix 3"],
    steps: [
        { name: "Manipulating files and directories", component: Step0 },
        { name: "Tree, path & files", component: Step1 },
        { name: "Absolute paths", component: Step2 },
        { name: "Relative paths", component: Step3 },
        { name: "Change directory", component: Step4 },
        { name: "The HOME directory", component: Step5 },
        { name: "Create or copy", component: Step6 },
        { name: "Move or remove", component: Step7 },
        { name: "Congratulations", component: Step8 },
    ],
    // For now, don't use `cd` in init, need to debug why it breaks the initialization script

    init: "cd /shared/data/",
    files: [],
};
