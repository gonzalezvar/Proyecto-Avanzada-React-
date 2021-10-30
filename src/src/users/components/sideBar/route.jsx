import Dashboard from "@material-ui/icons/Dashboard";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

// core components/views for Admin layout


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Perfil",
    icon: AccountCircleIcon,
  },
  {
    path: "/dashboard",
    name: "Productos",
    icon: Dashboard,
  },
  {
    path: "/dashboard",
    name: "Carrito de Compras",
    icon: AddShoppingCartIcon,
  },
  {
    path: "/dashboard",
    name: "Conoce tus gastos",
    icon: AccountBalanceWalletIcon,
  },
];

export default dashboardRoutes;