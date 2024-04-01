import { useQuery } from "@tanstack/react-query";

import { api } from "src/services/api/api";

export const PROPERT_TYPE_LIST_QUERY_KEY = "property-types-list";

export const usePropertTypesListQuery = () => {
  return useQuery({
    queryKey: [PROPERT_TYPE_LIST_QUERY_KEY],
    queryFn: () => api.propertyTypes.many(),
    staleTime: 1000 * 60 * 5,
  });
};
