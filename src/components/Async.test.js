import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async Overall suit for',()=>{

    test('Api success',async ()=>{
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json:async ()=>[{id:'p1',title:'First Post'}],
        });
        render(<Async/>);

        const listItemsElements = await screen.findAllByRole('listitem');
        expect(listItemsElements).not.toHaveLength(0);
    })

});