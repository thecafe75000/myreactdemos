import { useNavigate } from 'react-router-dom'

/**
 *   https://reactrouter.com/en/main/hooks/use-navigate
 */

export default function useLogoutTimer() {
  const navigate = useNavigate()

  navigate('/new-route', { state: { key: 'value' } })
}

/**

    navigate("/new-route", { state: { key: "value" } }) ：这是一个函数调用，
    它使用了React Router库中的navigate函数。这个函数用于在应用程序中导航到不同的路由（页面）。

    "/new-route"：是要导航到的目标路由的路径。换句话说，它是你想要用户进入的新页面的URL路径。

    { state: { key: "value" } }：这是一个可选的参数对象，用于传递状态到目标路由。
    在这个例子中，state是一个键，它对应的值是一个包含了一个键值对（"key": "value"）的对象。
    这个对象可以存储任何你想要传递到目标路由的数据。

    在目标路线上访问该值useLocation：一旦导航到了"/new-route"这个目标路由，
    可以使用React Router提供的useLocation钩子来访问传递给该路由的状态值。
    useLocation是一个React Router提供的用于在函数组件中获取当前URL位置信息的钩子。
    通过使用它，可以获取到传递过来的状态值，然后在你的组件中使用它。

    综上所述，通过调用navigate函数，可以在React应用程序中导航到一个新的页面，并且可以选择性地传递一些状态到目标页面
    然后，你可以在目标页面上使用useLocation钩子来访问这些传递过来的状态值，以便在目标页面中使用它们。
    

*/