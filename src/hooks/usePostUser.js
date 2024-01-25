import { useState } from 'react';

import { postUserApi } from '../apis';

export default function usePostUser() {
  const [isLoading, setIsLoading] = useState(false);

  async function postUser(name) {
    setIsLoading(true);
    const user = await postUserApi(name);
    setIsLoading(false);

    return user;
  }

  return { isLoading, postUser };
}
