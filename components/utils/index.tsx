import queryString from 'query-string';

export function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function prefixFieldKey(name, prefix = '') {
  if (!prefix) {
    return name;
  } else {
    name = name.replace(name[0], name[0].toUpperCase());
    return `${prefix}${name}`;
  }
}

export function processBasicFormItemsData(values) {
  const result = {};
  Object.entries(values).forEach(([formKey, formValue]) => {
    if (Array.isArray(formValue)) {
      formValue = formValue.filter((e) => !!e);
    }
    result[formKey] = formValue;
  });
  return result;
}

export const isClient = typeof window === 'object';

/**
 * formatUrl 处理Url
 * @export
 * @param {*} url 需要处理的url，比如 /deploy/order/:id
 * @param {*} params 需要处理的参数 ，比如 {id: 123}
 * @param {*} query 需要处理的参数 ，比如 {id: 123}
 * @returns
 */
export function formatUrl(url: string): string;
export function formatUrl(url: string, params?: object): string;
export function formatUrl(url: string, params?: object, query?: object): string;
export function formatUrl(url: string, params?: object, query?: object): string {
  if (params) {
    Object.entries(params).forEach(([paramKey, paramValue]) => {
      var regex = new RegExp(`:${paramKey}`, 'i');
      url = url.replace(regex, paramValue);
    });
  }

  if (query) {
    url = `${url}?${queryString.stringify(query)}`;
  }

  return url;
}
