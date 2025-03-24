"use client";

import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Calculator, DollarSign, Percent, X } from "lucide-react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import FormsLoanSimulatorProps from "./types";

type Payment = {
  paymentDate: string;
  paymentNumber: number;
  payment: string;
  principal: string;
  interest: string;
  totalInterestSoFar: string;
  remainingBalance: string;
};

/**
 * Formats a date as "MMM YYYY" (e.g. "Mar 2025").
 *
 * You can tweak this to any desired format.
 */
function formatPaymentDate(date: Date) {
  return date.toLocaleString("default", { month: "short", year: "numeric" });
}

/**
 * Calculate an amortization schedule for a given loan, including a date for each monthly payment.
 *
 * @param {number} principal - The initial amount of the loan.
 * @param {number} annualInterestRate - The annual interest rate (e.g., 0.065 for 6.5%).
 * @param {number} totalMonths - The total number of months to pay off the loan.
 * @param {Date} startDate - The Date object representing the first payment date.
 * @returns {Array} schedule - An array of objects representing each monthly payment.
 */
function createAmortizationSchedule(
  principal: number,
  annualInterestRate: number,
  totalMonths: number,
  startDate: string | Date
): { schedule: Payment[]; monthlyPayment: string } {
  // Convert annual rate to a monthly decimal rate
  const monthlyInterestRate = annualInterestRate / 12 / 100;

  // Calculate the standard monthly payment using the amortization formula:
  // Payment = P * (r / (1 - (1 + r)^(-n)))
  //   P = principal
  //   r = monthlyInterestRate
  //   n = totalMonths
  const monthlyPayment =
    principal *
    (monthlyInterestRate /
      (1 - Math.pow(1 + monthlyInterestRate, -totalMonths)));

  let balance = principal;
  let totalInterestPaid = 0;

  // Make a copy of the startDate so we can safely increment it
  const paymentDate = new Date(startDate);

  const schedule = [];

  for (let i = 1; i <= totalMonths; i++) {
    // Calculate interest portion for the current month
    const interestPayment = balance * monthlyInterestRate;

    // Principal portion is the remainder of the monthly payment
    const principalPayment = monthlyPayment - interestPayment;

    // Update running total of interest
    totalInterestPaid += interestPayment;

    // Deduct principal from balance
    balance -= principalPayment;

    // Handle rounding so balance doesn't become negative
    if (balance < 0) balance = 0;

    // Format current payment date
    const formattedDate = formatPaymentDate(paymentDate);

    // Record this month's details
    schedule.push({
      paymentDate: formattedDate,
      paymentNumber: i,
      payment: monthlyPayment.toFixed(2),
      principal: principalPayment.toFixed(2),
      interest: interestPayment.toFixed(2),
      totalInterestSoFar: totalInterestPaid.toFixed(2),
      remainingBalance: balance.toFixed(2),
    });

    // Move to the next month
    paymentDate.setMonth(paymentDate.getMonth() + 1);

    // If the loan is fully paid, stop
    if (balance <= 0) break;
  }

  return {
    schedule,
    monthlyPayment: monthlyPayment.toFixed(2),
  };
}

function FormsLoanSimulator({ title, subTitle }: FormsLoanSimulatorProps) {
  const [show, setShow] = useState(false);
  const [schedule, setSchedule] = useState<Payment[]>([]);

  const [principal, setPrincipal] = useState(5000);
  const [interest, setInterest] = useState(5.8);
  const [months, setMonths] = useState(12);
  const [monthlyPayment, setMonthly] = useState("0");

  const compute = () => {
    const data = createAmortizationSchedule(
      principal,
      interest / 100,
      months,
      new Date()
    );
    setSchedule(data.schedule);
    setMonthly(data.monthlyPayment);
  };

  useEffect(() => {
    compute();
  }, []);

  return (
    <div className="py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p>{subTitle}</p>
        <div className="flex border border-green-500 rounded-md overflow-hidden mt-6">
          <div className="grid gap-3 flex-1 p-8 bg-white py-14 ">
            <div>
              <Label>Amount</Label>
              <div className="relative">
                <Input
                  type="number"
                  value={principal ?? ""}
                  onChange={(evt) => setPrincipal(parseFloat(evt.target.value))}
                  className="pl-6"
                />
                <DollarSign className="absolute top-3 left-2" size="14" />
              </div>
            </div>
            <div>
              <Label>Time in Years</Label>
              <Input type="number" defaultValue="1" min="1" />
            </div>
            <div>
              <Label>Time in Months</Label>
              <Input
                type="number"
                value={months ?? ""}
                onChange={(evt) => setMonths(parseFloat(evt.target.value))}
                min="1"
              />
            </div>
            <div className="flex items-end gap-4">
              <div className="grid gap-1 flex-1">
                <Label>Interest by Year</Label>
                <div className="relative">
                  <Input
                    type="number"
                    value={interest ?? ""}
                    onChange={(evt) =>
                      setInterest(parseFloat(evt.target.value))
                    }
                    className="pl-6"
                  />
                  <Percent className="absolute top-3 left-2" size="16" />
                </div>
              </div>
              <div className="grid">
                <Button type="button" onClick={() => compute()}>
                  Calcular <Calculator size="16" />{" "}
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center flex-1 p-8 bg-green-100 text-black">
            <div className="flex flex-col items-center gap-2">
              <h4 className="text-md font-semibold">Pagos Mensuales</h4>
              <h3 className="text-6xl font-semibold relative pl-6">
                <sup className="text-xs absolute top-0 left-0">USD</sup>{" "}
                {monthlyPayment}
              </h3>
            </div>
            <div>
              <div className="flex justify-between font-semibold">
                <h4>Total principal a pagar</h4>
                <h4>${principal}</h4>
              </div>
              <div className="border-b my-3 border-black"></div>
              <div className="flex justify-between  font-semibold">
                <h4>Total interés a pagar</h4>
                <h4>$890.45</h4>
              </div>
            </div>

            <div className="flex mt-16">
              <Button
                type="button"
                className="w-full"
                disabled={show}
                onClick={() => setShow(true)}
              >
                Ver programación de cuotas
              </Button>
            </div>
          </div>
        </div>

        {show && (
          <div className="border rounded-md p-8 mt-6 bg-white">
            <div className="flex justify-between items-start">
              <h3 className="text-3xl font-semibold mb-6">
                Programación de Pagos de Cuotas
              </h3>
              <Button
                size="icon"
                variant="outline"
                type="button"
                onClick={() => setShow(false)}
              >
                <X />
              </Button>
            </div>
            <Table>
              <TableCaption>Amortization Schedule.</TableCaption>
              <TableHeader>
                <TableRow className="text-black font-semibold">
                  <TableHead className="w-[100px]">Payment Number</TableHead>
                  <TableHead className="w-[200px]">Payment Date</TableHead>
                  <TableHead className="text-right">Payment</TableHead>
                  <TableHead className="text-right">Principal</TableHead>
                  <TableHead className="text-right">Interest</TableHead>
                  <TableHead className="text-right">Total interest</TableHead>
                  <TableHead className="text-right">Balance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {schedule.map((invoice, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {invoice.paymentNumber}
                    </TableCell>
                    <TableCell className="font-medium">
                      {invoice.paymentDate}
                    </TableCell>
                    <TableCell className="text-right">
                      {invoice.payment}
                    </TableCell>
                    <TableCell className="text-right">
                      {invoice.principal}
                    </TableCell>
                    <TableCell className="text-right">
                      {invoice.interest}
                    </TableCell>
                    <TableCell className="text-right">
                      {invoice.totalInterestSoFar}
                    </TableCell>
                    <TableCell className="text-right">
                      {invoice.remainingBalance}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}

export default FormsLoanSimulator;
