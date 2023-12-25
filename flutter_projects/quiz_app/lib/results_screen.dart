import 'package:flutter/material.dart';
import 'package:quiz_app/data/questions.dart';

class ResultsScreen extends StatelessWidget {
  const ResultsScreen(this.chosenAnswers, {super.key});

  final List<String> chosenAnswers;

  @override
  Widget build(BuildContext context) {
    var totalQuestions = questions.length;
    var correctAnswersCount = 0;

    for (int i = 0; i < questions.length; i++) {
      if (chosenAnswers[i] == questions[i].answers[0]) {
        correctAnswersCount++;
      }
    }

    return SizedBox(
      width: double.infinity,
      child: Container(
        margin: const EdgeInsets.all(40),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
                'You have answered $correctAnswersCount out of $totalQuestions questions correctly!'),
            SizedBox(
              height: 30,
            ),
            Text('List of answers and questions'),
            SizedBox(
              height: 30,
            ),
            TextButton(onPressed: () {}, child: Text('Restart Quiz'))
          ],
        ),
      ),
    );
  }
}
