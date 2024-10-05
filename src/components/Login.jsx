import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "./ui/card";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <main>
        <section>
          <Card className="max-w-lg mx-auto py-10 mt-24">
            <div className="flex flex-col gap-y-10 max-w-sm mx-auto">
              <p> Log into Qoobic </p>
              <form>
                <div className="mb-4">
                  <Label htmlFor="email-address">Your email address</Label>
                  <Input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <Button onClick={onLogin}>Login</Button>
                </div>
              </form>
              <p className="text-sm text-center">
                No account yet?{" "}
                <NavLink to="/signup">
                  <span className="text-primary">Sign up</span>
                </NavLink>
              </p>
            </div>
          </Card>
        </section>
      </main>
    </>
  );
};

export default Login;
