/**
 * Appends filter parameters to a URL's search params.
 * @param options - The options object.
 * @param options.url - The URL object to append the filter parameters to.
 * @param options.filter - The filter object containing key-value pairs.
 * @returns The updated URL object with the appended filter parameters.
 */
export const appendFilter = ({
  url,
  filter,
}: {
  url: URL;
  filter: { [key: string]: any };
}) => {
  if (filter) {
    Object.keys(filter).forEach((key) => {
      if (
        filter[key] !== null &&
        filter[key] !== undefined &&
        filter[key] !== ""
      ) {
        url.searchParams.append(key, filter[key].toString());
      }
    });
  }
  return url;
};
