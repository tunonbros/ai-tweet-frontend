
export const handleErrors = (response) => {
  if (response.status === 201 || response.status === 200) {
    return response
  } else if (response.status === 204) {
    throw Error("No recent original tweets found.")
  } else if (response.status === 404) {
    throw Error("Tweet not found")
  } else {
    throw Error(response.statusText)
  }
}
