import MyComponent from '../components/MyComponent';
import { BiBell } from 'react-icons/bi';
const Lab = () => {
    return (
        <MyComponent
            foo={{
                titi: 'toto',
            }}
            choices={[{ id: '1', name: 'Name' }]}
            isActive
            onClick={(param) => {
                // console.log("J'ai cliqué", param);
            }}
            icon={<BiBell fontSize={12} />}
        >
            <>
                <h1>Je suis un titre</h1>
                <div className="btn btn-secondary">Coucou</div>
            </>
        </MyComponent>
    );
};

export default Lab;
