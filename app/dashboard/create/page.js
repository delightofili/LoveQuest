"use client";

import { useState } from "react";
import StepSidebar from "@/components/dashboard/create/StepSidebar";
import BasicStep from "@/components/dashboard/create/BasicStep";
import MomentsStep from "@/components/dashboard/create/MomentsStep";
import ThemeStep from "@/components/dashboard/create/ThemeStep";
import PreviewStep from "@/components/dashboard/create/PreviewStep";
import PublishStep from "@/components/dashboard/create/PublishStep";

export default function CreatePage() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    title: "",
    occasion: "",
    recipientName: "",
    senderName: "",
    theme: "",
    story: [],
  });

  function nextStep() {
    setStep((prev) => prev + 1);
  }

  function previousStep() {
    setStep((prev) => prev - 1);
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 md:px-8 md:py-8 lg:flex-row lg:gap-8">
      <StepSidebar step={step} />

      <section className="flex-1 rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-10 ">
        {step === 1 && (
          <BasicStep form={form} setForm={setForm} nextStep={nextStep} />
        )}

        {step === 2 && (
          <MomentsStep
            form={form}
            setForm={setForm}
            nextStep={nextStep}
            previousStep={previousStep}
          />
        )}
        {step === 3 && (
          <ThemeStep
            form={form}
            setForm={setForm}
            nextStep={nextStep}
            previousStep={previousStep}
          />
        )}
        {step === 4 && (
          <PreviewStep
            form={form}
            nextStep={nextStep}
            previousStep={previousStep}
          />
        )}

        {step === 5 && <PublishStep form={form} previousStep={previousStep} />}
      </section>
    </div>
  );
}
