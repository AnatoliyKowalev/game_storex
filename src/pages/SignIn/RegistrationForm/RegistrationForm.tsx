import { FC } from "react";
import { useNavigate } from "react-router-dom";
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
import { Checkbox } from "@/components/ui/checkbox";

import { useAppDispatch } from "@/hooks";
import { registrationSchema } from "./constants";
import { setUser } from "@/redux/slices/userSlice";
import { useSignUpMutation } from "@/redux/authApi";

import { TypeRegisterForm } from "./interfaces";

const RegistrationForm: FC = () => {
  const { t } = useTranslation();

  const [signUp] = useSignUpMutation();

  const dispatch = useAppDispatch();

  const form = useForm<TypeRegisterForm>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      emailMob: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<TypeRegisterForm> = async (data) => {
    await signUp(data)
      .unwrap()
      .then((res) => {
        dispatch(setUser({ email: res.email }));
      });
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
            name="emailMob"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder={t("emailOrMobile")} {...field} />
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder={t("confirmPassword")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center gap-[8px] my-[16px]">
            <Checkbox id="social" />
            <label htmlFor="social" className="text-muted-foreground text-xs">
              {t("toUseSocialNetworks")}
            </label>
          </div>
          <Button type="submit" size="lg">
            {t("registration")}
          </Button>
        </form>
      </Form>
      <UseSocialNetworks />
    </Card>
  );
};

export default RegistrationForm;
