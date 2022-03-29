export const getAllTasks = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API_SERVER}/api/tasks`
  );

  if (!response.ok) {
    throw new Error("Something went wrong.");
  }

  return response.json();
};

export const getTaskById = async ({ queryKey }) => {
  /* eslint-disable no-unused-vars */
  const [_key, { id }] = queryKey;

  const response = await fetch(
    `${import.meta.env.VITE_APP_API_SERVER}/api/tasks/${id}`
  );

  if (!response.ok) {
    throw new Error("Something went wrong.");
  }

  return response.json();
};

export const createTask = async ({ ...data }) => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API_SERVER}/api/tasks/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};

export const updateTask = async ({ id, ...data }) => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API_SERVER}/api/tasks/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};

export const removeTask = async (id) => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API_SERVER}/api/tasks/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return true;
};

export const searchTask = async (taskname) => {
  const response = await fetch(
    `${import.meta.env.VITE_APP_API_SERVER}/api/tasks/search/${taskname}`
  );

  if (!response.ok) {
    throw new Error(response.json().message);
  }

  return response.json();
};
