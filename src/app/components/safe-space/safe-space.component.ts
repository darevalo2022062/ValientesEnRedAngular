import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

@Component({
  selector: "app-safe-space",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./safe-space.component.html",
  styleUrls: ["./safe-space.component.css"],
})
export class SafeSpaceComponent {
  activeTab = "home"
  reportMessage = ""
  showReportSuccess = false

  // Resources data
  resources = [
    {
      title: "Cómo identificar el acoso en línea",
      description: "Aprende a reconocer las señales de acoso y cómo actuar ante ellas.",
      icon: "shield",
    },
    {
      title: "Configurando tu privacidad",
      description: "Guía paso a paso para proteger tus cuentas en redes sociales.",
      icon: "lock",
    },
    {
      title: "Hablando con adultos de confianza",
      description: "Consejos para comunicarte con padres y maestros sobre situaciones difíciles.",
      icon: "chat",
    },
  ]

  // Safety tips
  safetyTips = [
    "Nunca compartas información personal con desconocidos",
    "Configura tus perfiles como privados",
    "Bloquea y reporta a usuarios que te hagan sentir incómoda",
    "Guarda evidencia de cualquier acoso (capturas de pantalla)",
    "Habla con un adulto de confianza si algo te preocupa",
  ]

  // Parent resources
  parentResources = [
    {
      title: "Guía para padres sobre seguridad en línea",
      description: "Información esencial para ayudar a proteger a sus hijas en internet.",
    },
    {
      title: "Señales de alerta",
      description: "Cómo identificar si su hija está experimentando acoso en línea.",
    },
    {
      title: "Conversaciones importantes",
      description: "Cómo hablar con sus hijas sobre seguridad digital y bienestar emocional.",
    },
  ]

  setActiveTab(tab: string): void {
    this.activeTab = tab
  }

  submitReport(): void {
    // In a real application, this would securely send the report to a backend
    console.log("Report submitted:", this.reportMessage)
    this.showReportSuccess = true
    this.reportMessage = ""

    // Hide success message after 3 seconds
    setTimeout(() => {
      this.showReportSuccess = false
    }, 3000)
  }
}

