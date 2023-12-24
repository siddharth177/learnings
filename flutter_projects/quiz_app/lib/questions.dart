import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:quiz_app/answer_button.dart';
import 'package:quiz_app/data/questions.dart';

class QuestionsScreen extends StatefulWidget {
  const QuestionsScreen(this.onSelected, {super.key});

  final void Function(String) onSelected;
  @override
  State<StatefulWidget> createState() {
    return _QuestionsState();
  }
}

class _QuestionsState extends State<QuestionsScreen> {
  var currentIndex = 0;
  void answerQuestion(String answer) {
    widget.onSelected(answer);
    setState(() {
      currentIndex++;
      if (currentIndex == questions.length) currentIndex = 0;
    });
  }

  @override
  Widget build(BuildContext context) {
    var currentQuestion = questions[currentIndex];
    return SizedBox(
      width: double.infinity,
      child: Container(
        margin: const EdgeInsets.all(40),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(currentQuestion.text,
                textAlign: TextAlign.center,
                style: GoogleFonts.lato(color: Colors.white, fontSize: 24)),
            const SizedBox(
              height: 30,
            ),
            ...currentQuestion.answers
                .map((e) => AnswerButton(e, answerQuestion))
          ],
        ),
      ),
    );
  }
}
