import { BottomBar } from '../components/BottomBar';
import { NavBar } from '../components/NavBar';
import { HomeScreen } from './HomeScreen';

export const Navigator = () => {
    return (
        <>
            <HomeScreen />
            <NavBar title='Inicio' />
            <BottomBar />
        </>
    )
}
