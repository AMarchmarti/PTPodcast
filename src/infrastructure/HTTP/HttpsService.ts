import type ErrorResponse from "@/domain/model/Error/ErrorResponse";
import HttpMethod from "@/domain/model/HTTP/HttpMethod";
import { HTTP_SUCCESS_STATUS } from "@/domain/model/HTTP/ResponseStatus";

/**
 * Represents the fetch options for making an HTTP request.
 */
interface Fetch {
	path: string | RequestInfo;
	body?: any;
	method?: HttpMethod;
	mode?: RequestMode;
	extraHeaders?: any;
}

/**
 * Represents the petition options for making an HTTP request.
 */
interface PetitionI extends Omit<Fetch, "extraHeaders" | "method"> {
	headers?: any;
}

/**
 * Parses the error response from an HTTP request.
 * @param response - The response object from the HTTP request.
 * @returns A promise that resolves to an ErrorResponse object.
 */
const parseError = async (response: Response): Promise<ErrorResponse> => {
	let error: ErrorResponse;
	try {
		const errorJson = await response.json();
		error = {
			status: response.status,
			error: errorJson.errorCode,
			message: errorJson.error || "",
		};
	} catch (e) {
		error = {
			status: response.status,
			error: response.statusText,
			message: "",
		};
	}

	return error;
};

/**
 * Creates the response object from an HTTP response.
 * @param response - The response object from the HTTP request.
 * @returns A promise that resolves to the response data.
 * @throws If the response status is not a success status.
 */
const createResponse = async (response: Response): Promise<any> => {
	const responseStatus = response.status;
	let result: any;
	if (!HTTP_SUCCESS_STATUS.includes(responseStatus)) {
		const responseData = await parseError(response);
		throw responseData;
	}
	try {
		result = await response.json();
	} catch (e) {
		result = response;
	}
	return result;
};

/**
 * Sends an HTTP request using the fetch API.
 * @param options - The fetch options for the request.
 * @returns A promise that resolves to the response data.
 */
const fetchRequest = ({
	path,
	body,
	method,
	mode,
	extraHeaders,
}: Fetch): Promise<any> =>
	new Promise((resolve, reject) => {
		const sendInformation = body
			? {
					method: method,
					body: JSON.stringify(body),
				}
			: {};
		fetch(path, {
			mode: mode || "cors",
			headers: {
				...extraHeaders,
			},
			...sendInformation,
		})
			.then((response) => {
				return createResponse(response);
			})
			.then(resolve)
			.catch(reject);
	});

/**
 * Sends an HTTP GET request.
 * @param options - The petition options for the request.
 * @returns A promise that resolves to the response data.
 */
export const get = ({ path, headers, mode }: PetitionI) =>
	fetchRequest({ path, extraHeaders: headers, mode });

/**
 * Sends an HTTP POST request.
 * @param options - The petition options for the request.
 * @returns A promise that resolves to the response data.
 */
export const post = ({ path, headers, mode, body }: PetitionI) =>
	fetchRequest({
		path,
		body,
		method: HttpMethod.POST,
		extraHeaders: headers,
		mode,
	});

/**
 * Sends an HTTP PUT request.
 * @param options - The petition options for the request.
 * @returns A promise that resolves to the response data.
 */
export const put = ({ path, headers, mode, body }: PetitionI) =>
	fetchRequest({
		path,
		body,
		method: HttpMethod.PUT,
		extraHeaders: headers,
		mode,
	});

export const patch = ({ path, headers, mode, body }: PetitionI) =>
	fetchRequest({
		path,
		body,
		method: HttpMethod.PATCH,
		extraHeaders: headers,
		mode,
	});

export const delet = ({ path, headers, mode, body }: PetitionI) =>
	fetchRequest({
		path,
		body,
		method: HttpMethod.DELETE,
		extraHeaders: headers,
		mode,
	});
