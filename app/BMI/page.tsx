// app/kalkulator/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Activity, RefreshCcw } from "lucide-react";

export default function BMICalculatorPage() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [status, setStatus] = useState("");
  const [color, setColor] = useState("text-slate-900");

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    if (weight && height) {
      const hInMeters = parseFloat(height) / 100;
      const bmiValue = parseFloat(weight) / (hInMeters * hInMeters);
      setBmi(bmiValue);

      // Logika Kategori BMI (Standar WHO/Kemenkes)
      if (bmiValue < 18.5) {
        setStatus("Kekurangan Berat Badan");
        setColor("text-blue-500");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setStatus("Berat Badan Normal (Ideal)");
        setColor("text-green-600");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setStatus("Kelebihan Berat Badan (Overweight)");
        setColor("text-orange-500");
      } else {
        setStatus("Obesitas");
        setColor("text-red-600");
      }
    }
  };

  const resetCalculator = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setStatus("");
  };

  return (
    <section className="container mx-auto py-16 px-4 flex flex-col items-center justify-center min-h-[80vh]">
      <div className="text-center mb-10 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Cek Kesehatan Anda</h1>
        <p className="text-lg text-muted-foreground">
          Ketahui status gizi Anda dengan menghitung Indeks Massa Tubuh (BMI) secara cepat dan akurat.
        </p>
      </div>

      <Card className="w-full max-w-md shadow-xl border-slate-200 dark:border-slate-800">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Activity className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-2xl">Kalkulator BMI</CardTitle>
          </div>
          <CardDescription>
            Masukkan berat dan tinggi badan Anda di bawah ini.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={calculateBMI} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="weight" className="text-base">Berat (kg)</Label>
                <Input 
                  id="weight"
                  type="number" 
                  placeholder="Contoh: 65" 
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="text-lg h-12"
                  required
                  min="1"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="height" className="text-base">Tinggi (cm)</Label>
                <Input 
                  id="height"
                  type="number" 
                  placeholder="Contoh: 170" 
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="text-lg h-12"
                  required
                  min="1"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <Button type="submit" size="lg" className="w-full font-semibold text-lg h-12">
                Hitung BMI
              </Button>
              {bmi !== null && (
                <Button 
                  type="button" 
                  variant="outline" 
                  size="icon" 
                  className="h-12 w-12 shrink-0"
                  onClick={resetCalculator}
                  title="Reset"
                >
                  <RefreshCcw className="h-5 w-5" />
                </Button>
              )}
            </div>
          </form>

          {/* Hasil Perhitungan */}
          {bmi !== null && (
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center space-y-2">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Hasil BMI Anda</p>
                <p className="text-6xl font-extrabold text-slate-900 dark:text-white">
                  {bmi.toFixed(1)}
                </p>
                <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-slate-100 dark:bg-slate-800 ${color} mt-2`}>
                  {status}
                </div>
              </div>
              
              <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                <strong>Saran:</strong> {bmi < 18.5 ? "Perbanyak asupan nutrisi dan protein." : bmi < 24.9 ? "Pertahankan pola makan dan olahraga Anda!" : "Disarankan untuk konsultasi diet sehat dan rutin berolahraga."}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}