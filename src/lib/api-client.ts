

type RequestOptions = {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
  cookie?: string;
  params?: Record<string, string | number | boolean | undefined | null>;
  cache?: RequestCache;
};

function buildUrlWithParams(url: string, params?: RequestOptions["params"]): string {
  if (!params) return url;
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null)
  );
  if (Object.keys(filteredParams).length === 0) return url;
  const queryString = new URLSearchParams(filteredParams as Record<string, string>).toString();
  return `${url}?${queryString}`;
}

async function fetchApi<T>(url: string, options: RequestOptions = {}): Promise<T> {
  const { method = "GET", headers = {}, body, cookie, params, cache = "no-store" } = options;
  const fullUrl = buildUrlWithParams(`${url}`, params);

  console.log({ fullUrl });

  const response = await fetch(fullUrl, {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...headers,
      ...(cookie ? { Cookie: cookie } : {})
    },
    body: body ? JSON.stringify(body) : undefined,
    credentials: "include",
    cache
  });

  if (!response.ok) {
    const message = (await response.json()).message || response.statusText;
    if (typeof window !== "undefined") {
      throw new Error(message);
    }
    throw new Error(message);
  }

  return response.json();
}

export const api = {
  get<T>(url: string, options?: RequestOptions): Promise<T> {
    return fetchApi<T>(url, { ...options, method: "GET" });
  },
  post<T>(url: string, body?: any, options?: RequestOptions): Promise<T> {
    return fetchApi<T>(url, { ...options, method: "POST", body });
  },
  put<T>(url: string, body?: any, options?: RequestOptions): Promise<T> {
    return fetchApi<T>(url, { ...options, method: "PUT", body });
  },
  patch<T>(url: string, body?: any, options?: RequestOptions): Promise<T> {
    return fetchApi<T>(url, { ...options, method: "PATCH", body });
  },
  delete<T>(url: string, options?: RequestOptions): Promise<T> {
    return fetchApi<T>(url, { ...options, method: "DELETE" });
  }
};
