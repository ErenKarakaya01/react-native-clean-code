import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import MainErrorFallback from "@/components/errors/main";
import { queryConfig } from "@/lib/react-query";
import { useReactQueryDevTools } from '@dev-plugins/react-query';
import "../../global.css";

type AppProviderProps = {
  children: React.ReactNode;
};

const queryClientObject = new QueryClient({
  defaultOptions: queryConfig
});

export const AppProvider = ({ children }: AppProviderProps) => {
  useReactQueryDevTools(queryClientObject);
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig
      })
  );

  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ErrorBoundary>
  );
};
