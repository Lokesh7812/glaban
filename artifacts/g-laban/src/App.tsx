import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import { Preloader } from "@/components/Preloader";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ScrollToTop } from "@/components/ScrollToTop";
import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import MenuPage from "@/pages/menu";
import ContactPage from "@/pages/contact";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function ScrollToTopOnNavigate() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/">
        <Layout>
          <HomePage />
        </Layout>
      </Route>
      <Route path="/about">
        <Layout>
          <AboutPage />
        </Layout>
      </Route>
      <Route path="/menu">
        <Layout>
          <MenuPage />
        </Layout>
      </Route>
      <Route path="/contact">
        <Layout>
          <ContactPage />
        </Layout>
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Preloader />
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTopOnNavigate />
          <Router />
          <WhatsAppFloat />
          <ScrollToTop />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
