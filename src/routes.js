import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Sell from './pages/Sell';
import Consignment from './pages/Consignment';
import CustomPieces from './pages/CustomPieces';
import Repairs from './pages/Repairs';
import ContactUs from './pages/ContactUs';
//import  from './pages/';

const routes = [
    {
        path: '/',
        component: <Home />,
        exact: true
    }, {
        path: '/about-us',
        component: <AboutUs />
    }, {
        path: '/sell',
        component: <Sell />
    }, {
        path: '/consignment',
        component: <Consignment />
    }, {
        path: '/custom-pieces',
        component: <CustomPieces />
    }, {
        path: '/repairs',
        component: <Repairs />
    }, {
        path: '/contact-us',
        component: <ContactUs />
    }
]
export default routes;

/*
{
    path: '/',
    component: < />
}
*/
