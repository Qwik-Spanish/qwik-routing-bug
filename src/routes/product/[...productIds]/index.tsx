import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const location = useLocation();
  return (
    <>
      <div>Product Item [...productIds] - Principal Page</div>
      <p>Href: {location.url.href}</p>
      <p>Pathname: {location.url.pathname}</p>
      <p>Product Id:</p>{' '}
      <ul>
        {location.params.productIds.split('/').map((id, index) => {
            return (id !== '') ? (
                <li>
                  Product select ({index + 1}): {id}
                </li> 
              ): undefined
        })}
      </ul>
    </>
  );
});
