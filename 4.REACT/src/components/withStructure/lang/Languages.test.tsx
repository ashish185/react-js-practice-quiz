import { render, screen } from "@testing-library/react";
import Languages from "./Languages";

describe("Languages", () => {
    const langs = ["HTML", "CSS", "JavaScript", "React"];

    test("render correctly", () => {
        render(<Languages languages={langs} />);
        const listElem = screen.getByRole("list");
        expect(listElem).toBeInTheDocument();
    })

    test("render a list of languages", () => {
        render(<Languages languages={langs} />);
        const liElems = screen.getAllByRole("listitem");
        expect(liElems).toHaveLength(langs.length);
    })

    test("renders Login button", () => {
        render(<Languages languages={langs} />);
        const loginBtn = screen.getByRole("button", {
            name: "Login"
        });
        expect(loginBtn).toBeInTheDocument();
    })

    test("Start Course button is not rendered", () => {
        render(<Languages languages={langs} />);
        const startCourseBtn = screen.queryByRole("button", {
            name: "Start Course"
        });
        expect(startCourseBtn).not.toBeInTheDocument();
    })

    test("Start Course button is displayed", async () => {
        render(<Languages languages={langs} />);
        const startCourseBtn = await screen.findByRole("button", {
            name: "Start Course"
        }, {timeout: 2000});
        expect(startCourseBtn).toBeInTheDocument();
    })
})
