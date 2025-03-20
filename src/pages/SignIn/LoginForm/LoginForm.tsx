import { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import UseSocialNetworks from "../UseSocialNetworks";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { loginSchema } from "./constants";
import { useLoginMutation } from "@/redux/authApi";

import { TypeLoginForm } from "./interfaces";

const LoginForm: FC = () => {
  const { t } = useTranslation();

  const [login] = useLoginMutation();

  const form = useForm<TypeLoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<TypeLoginForm> = async (data) => {
    await login(data).unwrap();
  };

  return (
    <Card className="gap-[8px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-[8px]"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder={t("email")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder={t("password")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="mt-[16px]" type="submit" size="lg">
            {t("login")}
          </Button>
        </form>
      </Form>
      <UseSocialNetworks />
      <Link
        to="/forgot-password"
        className="mt-[16px] text-muted-foreground mx-auto text-xs underline"
      >
        {t("forgotPassword")}
      </Link>
    </Card>
  );
};

export default LoginForm;
