
export const handleErrors = (response) => {
  if (response.status === 201) {
    return response
  } else if (response.status === 204) {
    throw Error("No recent original tweets found.")
  } else {
    throw Error(response.statusText)
  }
}
